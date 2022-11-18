function init(id, components) {
  const wrapper = document.getElementById(id);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < components.length; i++) {
    fragment.appendChild(components[i]);
  }

  wrapper.replaceChildren(fragment);
}

function component({
  type = "div",
  text,
  children,
  src,
  alt,
  classNames,
  onClick,
}) {
  const element = document.createElement(type);

  !!src && (element.src = src);
  !!alt && (element.alt = alt);
  !!classNames && classNames.length && element.classList.add(classNames);
  !!onClick && element.addEventListener("click", onClick);

  if (!!children && children.length) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < children.length; i++) {
      fragment.appendChild(children[i]);
    }
    element.appendChild(fragment);
  } else {
    element.textContent = text;
  }

  return element;
}

export { init, component };
