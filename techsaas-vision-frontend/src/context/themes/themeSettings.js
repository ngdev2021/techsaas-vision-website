import adultEntertainmentTheme from './adultEntertainment';
import defaultTheme from './defaultTheme';
import drugGameTheme from './drugGame';
import foodieTheme from './foodie';
import foodieInfluencerTheme from './foodieInfluencer';
import mafiaTheme from './mafia';
import monopolyTheme from './monopoly';
import socialMediaInfluencerTheme from './socialMediaInfluencer';

export const themeSettings = {
  default: defaultTheme,
  monopoly: monopolyTheme,
  foodie: foodieTheme,
  mafia: mafiaTheme,
  drugGame: drugGameTheme,
  adultEntertainment: adultEntertainmentTheme,
  foodieInfluencer: foodieInfluencerTheme,
  socialMediaInfluencer: socialMediaInfluencerTheme,
};

console.log('themeSettings:', themeSettings);