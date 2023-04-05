import type { Position } from '@/types/common'
import type { BaseComponent } from '@/models'
import { calcComponentAxis } from '@/utils/utils'

/**
 * 给定区域获取该区域范围内的所有组件和包含该这些组件的最小区域
 * @param rect 区域范围
 * @param componentData 所有组件数据
 *
 *@return {components: BaseComponent[], rect: Position} components 所有组件， minRect 最小区域
 */
export const getSelectComponents = (
  rect: Position,
  componentData: BaseComponent[]
): { components: Array<BaseComponent>; rect: Position } | undefined => {
  const selectedComponents: Array<BaseComponent> = []
  const leftSet: Set<number> = new Set()
  const topSet: Set<number> = new Set()
  const rightSet: Set<number> = new Set()
  const bottomSet: Set<number> = new Set()

  // 计算所有的组件数据，判断是否在选中区域内
  componentData.forEach((component) => {
    // 获取位置大小信息：left, top, width, height
    const { width, height, left, top, rotate } = component.style
    const componentRect: Position = calcComponentAxis({
      width,
      height,
      left,
      top,
      rotate
    })
    if (
      componentRect.left >= rect.left &&
      componentRect.right <= rect.right &&
      componentRect.top >= rect.top &&
      componentRect.bottom <= rect.bottom
    ) {
      selectedComponents.push(component)
      leftSet.add(componentRect.left)
      topSet.add(componentRect.top)
      rightSet.add(componentRect.right)
      bottomSet.add(componentRect.bottom)
    }
  })

  if (selectedComponents.length > 0) {
    const left = Math.min(...leftSet)
    const right = Math.max(...rightSet)
    const top = Math.min(...topSet)
    const bottom = Math.max(...bottomSet)
    return {
      components: selectedComponents,
      rect: { left, right, top, bottom }
    }
  }
}
