// Immutable??
function combineModules(modules) {

  const reducers = {}
  const selectors = {}

  Object.entries(modules).forEach(module => {
    const moduleName = module[0]
    const moduleReducer = module[1].reducer
    const moduleSelectors = module[1].selectors

    // Add Reducer to final reducers.
    reducers[moduleName] = moduleReducer

    // Namespace (baseline?) selectors
    Object.entries(moduleSelectors).forEach((selector) => {
      const selectorName = selector[0]
      const selectorFunction = selector[1]

      selectors[selectorName] = (state, ...args) => selectorFunction(state[moduleName], ...args)
    })

  })

  const rootReducer = combineReducers(reducers)

  return { rootReducer, selectors }
}

