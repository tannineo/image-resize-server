import miscService from '~/app/services/misc/miscService'

test('this is a sample test', async () => {
  const str = await miscService.getOK()
  expect(str).toBe('ok')
})
