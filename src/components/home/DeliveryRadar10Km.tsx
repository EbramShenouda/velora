import React from 'react';
import { BoutiqueDeliveryMap } from './BoutiqueDeliveryMap';

/**
 * @deprecated Sostituito da BoutiqueDeliveryMap in quanto la copertura è stata estesa a tutta Roma
 * e la bottega principale è in Via Nomentana 38, 00013 Tor Lupara.
 */
export const DeliveryRadar10Km: React.FC = () => {
  return <BoutiqueDeliveryMap />;
};

export default DeliveryRadar10Km;
