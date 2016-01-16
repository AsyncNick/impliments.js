const impliments = require('./index')
const { test, $$ } = require('viv')

test('impliments.js', { homepage: 'github@asyncnick/impliments,js' }, (t) => {
  t.func(impliments, data => {
    if (!data) {
      data = ['app', 'view', 'example']
    }
    impliments(data, (app, view, example) => {
      return $$(app && view && example)
    })
  }).then(isError => {
    t.test(isError)
  })
})
