export const allMenuItems = `
query {allMenuItems(sort:[{ orderRank:  ASC}]){
  label 
  link
  
  
  subMenuItem{
    label 
    link
  }
}
}
    `;

export const allSectionData = `
  query {
    allSectionData(sort:[{ orderRank: ASC}]) { 
        type 
        head 
        subHeadAbove 
        subHead 
        title 
        body 
        image 
        buttonText 
        buttonType 
        buttonIcon 
        buttonType 
        action
    }
}
    `;
