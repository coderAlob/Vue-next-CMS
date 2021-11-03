class LocalCache {
  //设置缓存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  //获取缓存
  getCache(key: string) {
    //通过JSON.stringify将obj转化为string,利用JSON.parse将string转化为obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  //删除缓存
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  //清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
