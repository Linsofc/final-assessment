import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum harus mengembalikan hasil penjumlahan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('sum harus mengembalikan hasil penjumlahan angka negatif dan positif', () => {
  assert.strictEqual(sum(-2, 3), 1);
});

test('sum harus mengembalikan hasil penjumlahan dua angka nol', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('sum harus mengembalikan hasil penjumlahan angka desimal', () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});

test('sum harus mengembalikan hasil penjumlahan angka dalam string dan angka', () => {
  assert.strictEqual(sum('3', 5), '35');
});