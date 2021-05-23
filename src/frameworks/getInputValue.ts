/**
 * @description Get correct value from input element.
 */
export function getInputValue(element: HTMLInputElement | null, placeholder = false): string {
  if (element && placeholder) {
    if (element.value && element.value !== '') return element.value;
    else return element.placeholder;
  } else if (element && !placeholder) return element.value ? element.value : '';
  else return '';
}
