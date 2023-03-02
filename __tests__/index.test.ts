import { expect, test, vi } from 'vitest'
import { printName } from '../src/print'

test('hello command', () => {
  const name = 'vitest'
  const log = vi.spyOn(console, 'log')
  printName(name)
  expect(log).toHaveBeenCalledWith(`Hello, ${name}!`)
  log.mockRestore()
})
