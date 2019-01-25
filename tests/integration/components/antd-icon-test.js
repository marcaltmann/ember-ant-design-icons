import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | antd-icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(3);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{antd-icon type="menu"}}`);

    const element = this.element.children[0];

    assert.equal(element.tagName, 'svg', 'renders an SVG element as outermost element');

    const classes = element.classList;
    assert.ok(classes.contains('AntdIcon'), 'contains component CSS class');
    assert.ok(classes.contains('AntdIcon--menu', 'contains variant CSS class'));
  });
});
