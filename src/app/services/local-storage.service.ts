import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: string): void {
    this.storage[key] = value;
  }

  get(key: string): string {
    return this.storage[key] || false;
  }

  setObject(key: string, value: string): void {
    if (!value) {
      return;
    }
    this.storage[key] = JSON.stringify(value);
  }

  getObject(key: string): string {
    return JSON.parse(this.storage[key] || {});
  }

  getValue<T>(key: string): T {
    const obj = JSON.parse(this.storage[key] || null);
    return obj as T || null;
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }

  get length(): number {
    return this.storage.length;
  }

  get isStorageEmpty(): boolean {
    return this.storage.length === 0;
  }
}
