import { Amplify, Auth, Storage } from 'aws-amplify'
import * as Clipboard from 'expo-clipboard'
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import awsExports from '../src/aws-exports'

// const AWS = require('aws-sdk/dist/aws-sdk-react-native')

// Amplify.configure(awsExports)
Amplify.configure({
  Auth: {
    identityPoolId: '45e4977d-9989-4cf7-9e43-5fdaaa47611f', //REQUIRED - Amazon Cognito Identity Pool ID
    region: 'us-west-1', // REQUIRED - Amazon Cognito Region
  },
  Storage: {
    AWSS3: {
      bucket: 'amplify-porschehunter-dev-11245-deployment', //REQUIRED -  Amazon S3 bucket name
      region: 'us-west-1', //OPTIONAL -  Amazon service region
    },
  },
})

// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//   IdentityPoolId: 'us-west-1:45e4977d-9989-4cf7-9e43-5fdaaa47611f',
// })

const AmplifyDemo = () => {
  const [image, setImage] = useState(null)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    ;(async () => {
      if (Constants.platform.ios) {
        const cameraRollStatus =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync()
        if (
          cameraRollStatus.status !== 'granted' ||
          cameraStatus.status !== 'granted'
        ) {
          alert('Sorry, we need these permissions to make this work!')
        }
      }
    })()
  }, [])

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: 'Images',
      aspect: [4, 3],
    })

    handleImagePicked(result)
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Images',
      aspect: [4, 3],
      quality: 1,
    })

    handleImagePicked(result)
  }

  const handleImagePicked = async pickerResult => {
    try {
      if (pickerResult.canceled) {
        alert('Upload canceled')
        return
      } else {
        setPercentage(0)
        const img = await fetchImageFromUri(pickerResult.assets[0].uri)
        const uploadUrl = await uploadImage('demo.jpg', img)
        downloadImage(uploadUrl)
      }
    } catch (e) {
      console.log(e)
      alert('Upload failed')
    }
  }

  uploadImage = (filename, img) => {
    console.log('uploadImage')
    Auth.currentCredentials()
    console.log('uploadImage post Auth.currentCredentials()')
    return Storage.put(filename, img, {
      level: 'public',
      contentType: 'image/jpeg',
      progressCallback(progress) {
        setLoading(progress)
      },
    })
      .then(response => {
        console.log('Storage.put complete')
        return response.key
      })
      .catch(error => {
        console.log('Storage.put error')
        console.log(error)
        return error.response
      })
  }

  const setLoading = progress => {
    const calculated = parseInt((progress.loaded / progress.total) * 100)
    updatePercentage(calculated) // due to s3 put function scoped
  }

  const updatePercentage = number => {
    setPercentage(number)
  }

  downloadImage = uri => {
    console.log('downloadImage')
    Storage.get(uri)
      .then(result => setImage(result))
      .catch(err => console.log(err))
  }

  const fetchImageFromUri = async uri => {
    console.log('fetchImageFromUri')
    const response = await fetch(uri)
    const blob = await response.blob()
    return blob
  }

  const copyToClipboard = () => {
    Clipboard.setString(image)
    alert('Copied image URL to clipboard')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AWS Storage Upload Demo</Text>
      {percentage !== 0 && <Text style={styles.percentage}>{percentage}%</Text>}

      {image && (
        <View>
          <Text style={styles.result} onPress={copyToClipboard}>
            <Image
              source={{ uri: image }}
              style={{ width: 250, height: 250 }}
            />
          </Text>
          <Text style={styles.info}>Long press to copy the image url</Text>
        </View>
      )}

      <Button onPress={pickImage} title='Pick an image from camera roll' />
      <Button onPress={takePhoto} title='Take a photo' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 15,
  },
  percentage: {
    marginBottom: 10,
  },
  result: {
    paddingTop: 5,
  },
  info: {
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default AmplifyDemo
