import { createDemoProEntitlement, createFreeEntitlement } from '../data/products';

export async function getAvailableProducts() {
  // Production note:
  // Expo Go cannot run real App Store / Google Play in-app purchases.
  // In a store build, this function should call the chosen IAP provider.
  return [
    {
      id: 'saveroom_lifetime_pro',
      type: 'lifetime',
      available: true,
      mode: 'demo'
    }
  ];
}

export async function purchaseLifetimePro() {
  // Demo purchase bridge.
  // Replace with StoreKit / Google Play Billing provider in a production build.
  return createDemoProEntitlement();
}

export async function restorePurchases() {
  // In production this should restore purchases from the store account.
  return createFreeEntitlement();
}
