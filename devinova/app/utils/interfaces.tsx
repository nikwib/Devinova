export interface data {
  type: string;
  head: string;
  subHeadAbove: string;
  subHead: string;
  title: string;
  body: string;
  image: string;
  buttonText: string;
  buttonType: string;
  buttonIcon: string;
  action: string;
}

export interface menuItems {
  label: string;
  link: string;
  subMenu: subMenuItem;
}

export interface subMenuItem {
  label: string;
  link: string;
}
