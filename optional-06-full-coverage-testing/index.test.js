import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum harus mengembalikan jumlah dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('sum harus mengembalikan 0 saat salah satu argumen bukan angka', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum(null, 3), 0);
  assert.strictEqual(sum(undefined, 3), 0);
});

test('sum harus mengembalikan 0 saat argumen pertama negatif', () => {
  assert.strictEqual(sum(-1, 3), 0);
});

test('sum harus mengembalikan 0 saat argumen kedua negatif', () => {
  assert.strictEqual(sum(3, -1), 0);
});

test('sum harus mengembalikan 0 saat kedua argumen bukan angka', () => {
  assert.strictEqual(sum('a', 'b'), 0);
});

test('sum harus mengembalikan NaN saat salah satu argumen adalah NaN', () => {
  assert.ok(Number.isNaN(sum(NaN, 5)));
  assert.ok(Number.isNaN(sum(5, NaN)));
});

test('sum harus mengembalikan 0 saat kedua argumen negatif', () => {
  assert.strictEqual(sum(-1, -3), 0);
});

test('sum harus mengembalikan hasil penjumlahan saat kedua argumen nol', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('sum harus mengembalikan hasil penjumlahan angka desimal', () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});