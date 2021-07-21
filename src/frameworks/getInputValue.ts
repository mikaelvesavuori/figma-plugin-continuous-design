/**
 * @description Get correct value from input element.
 */
export function getInputValue(
  element: HTMLInputElement | HTMLSelectElement | null,
  placeholder = false
): string {
  if (element && placeholder) {
    if (element.value && element.value !== '') return element.value;
    // @ts-ignore
    else return element.placeholder;
  } else if (element && !placeholder) return element.value ? element.value : '';
  else return '';
}
