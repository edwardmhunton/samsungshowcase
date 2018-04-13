import LayoutEngine from './LayoutEngine';

const ScreensFromJson = () => {}


ScreensFromJson.formatData = (data) => {

  var associatedScreens = {};

  for(var i in data) {

            associatedScreens[data[i].name] = {};

            associatedScreens[data[i].name].components = LayoutEngine.getScreen(data[i], data[i].name);
            associatedScreens[data[i].name].id = data[i].id;
            associatedScreens[data[i].name].styles = data[i].styles;
  }

  return associatedScreens;

}

export default ScreensFromJson;
