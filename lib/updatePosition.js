import ReactNative, {NativeModules, Platform} from 'react-native'

const {UIManager} = NativeModules;

module.exports = function (ref, debug) {
  const handle = ReactNative.findNodeHandle(ref);
  if (handle) {
    setTimeout(() => {
      UIManager.measureLayoutRelativeToParent(
        handle,
        (e) => {
          console.error(e)
        },
        (x, y, w, h) => {
          if (debug) {
            console.log(x, y, w, h);
          }
          ref._currentPosition(x, y);
        });
    }, 0);
  }
};
