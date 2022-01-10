const getPINs = require('.')

const expectedResult = [
  '1357',
  '4357',
  '2357',
  '1657',
  '4657',
  '2657',
  '1257',
  '4257',
  '2257',
  '1327',
  '4327',
  '2327',
  '1627',
  '4627',
  '2627',
  '1227',
  '4227',
  '2227',
  '1387',
  '4387',
  '2387',
  '1687',
  '4687',
  '2687',
  '1287',
  '4287',
  '2287',
  '1347',
  '4347',
  '2347',
  '1647',
  '4647',
  '2647',
  '1247',
  '4247',
  '2247',
  '1367',
  '4367',
  '2367',
  '1667',
  '4667',
  '2667',
  '1267',
  '4267',
  '2267',
  '1354',
  '4354',
  '2354',
  '1654',
  '4654',
  '2654',
  '1254',
  '4254',
  '2254',
  '1324',
  '4324',
  '2324',
  '1624',
  '4624',
  '2624',
  '1224',
  '4224',
  '2224',
  '1384',
  '4384',
  '2384',
  '1684',
  '4684',
  '2684',
  '1284',
  '4284',
  '2284',
  '1344',
  '4344',
  '2344',
  '1644',
  '4644',
  '2644',
  '1244',
  '4244',
  '2244',
  '1364',
  '4364',
  '2364',
  '1664',
  '4664',
  '2664',
  '1264',
  '4264',
  '2264',
  '1358',
  '4358',
  '2358',
  '1658',
  '4658',
  '2658',
  '1258',
  '4258',
  '2258',
  '1328',
  '4328',
  '2328',
  '1628',
  '4628',
  '2628',
  '1228',
  '4228',
  '2228',
  '1388',
  '4388',
  '2388',
  '1688',
  '4688',
  '2688',
  '1288',
  '4288',
  '2288',
  '1348',
  '4348',
  '2348',
  '1648',
  '4648',
  '2648',
  '1248',
  '4248',
  '2248',
  '1368',
  '4368',
  '2368',
  '1668',
  '4668',
  '2668',
  '1268',
  '4268',
  '2268',
]

test('All max', () => {
  expect(getPINs('1357')).toStrictEqual(expectedResult)
})
