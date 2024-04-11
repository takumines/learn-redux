export const CHANGE_FILTER = "filters/statusFilterChanged"

type ChangeFilterAction = {
  type: typeof CHANGE_FILTER;
  payload: string;
}

export type FilterAction = ChangeFilterAction
