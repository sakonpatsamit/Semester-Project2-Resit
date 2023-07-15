export function createErrorMessage(title, text) {
  return `<div class="py-3 px-4 card bg-danger text-dark text-center" id="error">
    <h4>${title}</h4><p>${text}</p>
        </div>`;
}
