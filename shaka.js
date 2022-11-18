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

function bus() {
  var topics = {};

  this.$on = function (eventName, listener) {
    if (!topics[eventName] || !topics[eventName].length) {
      topics[eventName] = [];
    }
    topics[eventName].push(listener);
  };

  this.$emit = function (eventName, params) {
    if (!topics[eventName] || !topics[eventName].length) return;

    for (let i = 0; i < topics[eventName].length; i++) {
      const listener = topics[eventName][i];

      listener(params || {});
    }
  };

  this.$remove = function (eventName, listener) {
    if (!topics[eventName] || !topics[eventName].length) return;

    delete topics[listener];
  };

  this.$get = function (eventName) {
    return topics[eventName];
  };
}

export { init, component, bus };
