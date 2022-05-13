import React, {FC, ReactElement} from 'react'

export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean }

export type WithRole<P = {}> = FC<P> & TypeRoles
export type ChildrenWithRole = JSX.Element & TypeRoles