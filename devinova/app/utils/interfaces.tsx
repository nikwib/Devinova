export interface sectionData {
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
  subMenu: subMenuItem[];
}

export interface subMenuItem {
  label: string;
  link: string;
}

export interface iContactData {
  label: string;
  phone: string;
  email: string;
  address: address[];
  pageImage: {
    asset: {
      url: string;
    };
  };
  logo: {
    asset: {
      url: string;
    };
  };
  socialMedia: socialMedia[];
}

interface address {
  label: string;
  street: string;
  zipCode: string;
  city: string;
  country: string;
}

interface socialMedia {
  label: string;
  url: string;
}
