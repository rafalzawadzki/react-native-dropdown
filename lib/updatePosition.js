import ReactNative, {NativeModules, Platform} from 'react-native'

const {UIManager} = NativeModules;

module.exports = function (ref, debug) {
  const handle = ReactNative.findNodeHandle(ref);
  if (handle) {
    setTimeout(() => {
      UIManager.measureInWindow(handle, (x, y, width, height) => {
        if (debug) {
          console.log(x, y, width, height);
        }
        ref._currentPosition(x, y);
      });
    }, 0);
  }
};
