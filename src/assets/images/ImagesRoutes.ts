import IMG_0168 from "./photos/IMG_0168.jpg";
import IMG_2883 from "./photos/IMG_2883.jpg";
import IMG_7243 from "./photos/IMG_7243.jpg";
import IMG_7269 from "./photos/IMG_7269.jpg";
import IMG_7290 from "./photos/IMG_7290.jpg";
import IMG_7043 from "./photos/IMG_7043.jpg";
import IMG_7314 from "./photos/IMG_7314.jpg";
import IMG_7318 from "./photos/IMG_7318.jpg";

import x from "./icons/x.svg";
import menu from "./icons/menu.png";

export const ImagesRoutes = {
  IMG_0168: IMG_0168.src,
  IMG_2883: IMG_2883.src,
  IMG_7243: IMG_7243.src,
  IMG_7269: IMG_7269.src,
  IMG_7290: IMG_7290.src,
  IMG_7043: IMG_7043.src,
  IMG_7314: IMG_7314.src,
  IMG_7318: IMG_7318.src,

  x: x.src,
  menu: menu.src,
};
export type IMagesRoutesType = keyof typeof ImagesRoutes;
