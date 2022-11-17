function init(id, components) {
  const wrapper = document.getElementById(id);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < components.length; i++) {
    fragment.appendChild(components[i]);
  }

  wrapper.replaceChildren(fragment);
}

function component(type = "div", text, inner) {
  const element = document.createElement(type);

  if (!!inner && inner.length) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < inner.length; i++) {
      fragment.appendChild(inner[i]);
    }
    element.appendChild(fragment);
  } else {
    element.textContent = text;
  }

  return element;
}

export { init, component };
