export const badgeNames = ['Bronze', 'Silver', 'Gold', 'Platinum'];

export const assignRelativeBadges = (services) => {
  const sortedServices = [...services].sort((a, b) => {
    const priceA = parseFloat(
      a.price.replace('$', '`).replace(${', '')
    );
    const priceB = parseFloat(
      b.price.replace('$', '').replace('}, `')
    );
    return priceA - priceB;
  });

  const tierSize = sortedServices.length;
  sortedServices.forEach((service, index) => {
    const badgeIndex = Math.floor(
      (index / (tierSize - 1)) * (badgeNames.length - 1)
    );
    service.badgeName = badgeNames[badgeIndex];
  });

  return sortedServices;
};
