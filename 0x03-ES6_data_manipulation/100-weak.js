#!/usr/bin/node

// Weak link data structure

export const weakMap = new WeakMap();
let endpointCalls = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, endpointCalls);
  endpointCalls += 1;
  const count = weakMap.get(endPoint);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
