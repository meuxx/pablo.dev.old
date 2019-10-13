import React from 'react'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

interface IconArgs {
  prefix: string
  iconName: string
}

function normalizeIconArgs(
  icon: IconArgs | string | string[] | null
): IconArgs {
  if (Array.isArray(icon)) {
    return { prefix: icon[0], iconName: icon[1] }
  }

  if (typeof icon === 'string') {
    return { prefix: 'fas', iconName: icon }
  }

  return icon as IconArgs
}

export function FontAwesomeIcon({ icon }: FontAwesomeIconProps): JSX.Element {
  if (!icon) {
    return <svg />
  }

  const iconArgs = normalizeIconArgs(icon)
  return <svg className={`${iconArgs.prefix}-${iconArgs.iconName}`} />
}
