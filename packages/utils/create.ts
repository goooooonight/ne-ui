// bem命名函数
function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) prefixName += `-${blockSuffix}`
  if (element) prefixName += `__${element}`
  if (modifier) prefixName += `--${modifier}`
  return prefixName
}

// 创建bem
function createBem(prefixName: string) {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')

  const e = (element: string = '') =>
    element ? _bem(prefixName, '', element, '') : ''

  const m = (modifier: string = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : ''

  const be = (blockSuffix: string = '', element: string) =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''

  const bm = (blockSuffix: string = '', modifier: string) =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''

  const em = (element: string = '', modifier: string) =>
    element && modifier ? _bem(prefixName, '', element, modifier) : ''

  const bem = (blockSuffix: string, element: string = '', modifier: string) =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : ''

  const is = (name: string, state: string | boolean) =>
    name && state ? `is-${name}` : ''

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  }
}

// 创建命名空间
export function createNameSpace(name: string) {
  const prefixName = `ne-${name}`
  return createBem(prefixName)
}

//
//
// 是否需要增加m-value
//
//
