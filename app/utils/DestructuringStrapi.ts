export function transformDetailData(dataObject) {
  return dataObject.data.map(item => {
    return {
      ...item.attributes,
      id: item.id,
    };
  });

}

export function transformDetailLeaderBoardMenu(dataObject) {

  const cleanMenu = dataObject.data.map(item => {
    return {
      ...item.attributes,
      id: item.id,
    };
  });

  const cleanUsers = cleanMenu[0]?.users?.data.map(user => ({
    ...user.attributes,
    id: user.id
  }));

  const cleanVertical = {
      ...cleanMenu[0]?.vertical?.data?.attributes,
      id: cleanMenu[0]?.vertical?.data.id
  };

  return {
    ...(cleanMenu[0] ?? {}),
    users: cleanUsers?.length > 0 ? cleanUsers[0] : '',
    vertical: cleanVertical
  };

}

export function transformCountriesData(dataObject) {
    const countries = dataObject.map(item => {
      const attributes = {...item.attributes};
      delete attributes.currencies;
      delete attributes.languages;
      delete attributes.callingCodes;
      return attributes;
    });
    return countries;
}

export function orderMenu(section) {
  try{
    for (let item of section) {
        // Check if the item has a Section property, and if it has a Menu
        if (item.section && item.section.menu) {
            // Sort the Menu array based on the 'Order' field
            item.section.menu.sort((a, b) => a.order - b.order);
        }
    }
    return section;
  }catch(e){
    console.log(e)
  }

}
