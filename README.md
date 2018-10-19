
# react-native-double-button

## Getting started

`$ npm install react-native-double-button --save`

### Mostly automatic installation

`$ react-native link react-native-double-button`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-double-button` and add `RNDoubleButton.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNDoubleButton.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNDoubleButtonPackage;` to the imports at the top of the file
  - Add `new RNDoubleButtonPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-double-button'
  	project(':react-native-double-button').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-double-button/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-double-button')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNDoubleButton.sln` in `node_modules/react-native-double-button/windows/RNDoubleButton.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Double.Button.RNDoubleButton;` to the usings at the top of the file
  - Add `new RNDoubleButtonPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNDoubleButton from 'react-native-double-button';

// TODO: What to do with the module?
RNDoubleButton;
```
  