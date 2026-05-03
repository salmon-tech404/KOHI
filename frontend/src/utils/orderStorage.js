const KEY = "kohi_orders";

export function saveOrderId(id) {
  const ids = getOrderIds();
  if (!ids.includes(id)) {
    localStorage.setItem(KEY, JSON.stringify([id, ...ids]));
  }
}

export function getOrderIds() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}
