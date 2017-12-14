// 异步路由加载

export default function loadView(loader) {
    let endLoading = function endLoading(resolve) {
      return function end(component) {
        resolve(component)
      }
    }
  
    // before load
    return function load(resolve) {
      loader(endLoading(resolve))
    }
  }
  