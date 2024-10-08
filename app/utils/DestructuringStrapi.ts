export function transformDetailData(dataObject) {
  // Si es un array, aplica la transformación para arrays
  if (Array.isArray(dataObject.data)) {
    return dataObject.data.map(item => {
      return {
        ...item.attributes,
        id: item.id,
      };
    });
  } 
  // Si es un objeto, aplica la transformación para objetos
  else if (typeof dataObject.data === 'object' && dataObject.data !== null) {
    const { attributes, id } = dataObject.data;
    return {
      ...attributes,
      id,
    };
  } 
  // Si no es ni array ni objeto, devuelve null o lanza un error según tu preferencia
  else {
    return null;
  }
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

export function transformReview(allData: any[]) {
  try{
    return allData.data.map(item => {
      const { attributes, id } = item;
      const { store, user, ...restAttributes } = attributes;
  
      return {
        id,
        ...restAttributes,
        store: {
          id: store.data.id,
          ...store.data.attributes
        },
        user: {
          id: user.data.id,
          ...user.data.attributes
        }
      };
    });
  } catch(e) {
    console.log(e)
  }
 
}

export function transformDetailDataWithPagination(dataObject) {
  const transformedData = dataObject.data.map(item => {
    return {
      ...item.attributes,
      id: item.id,
    };
  });
  return {
    data: transformedData,
    pagination: {
      total: dataObject.meta.pagination.total
    }
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
