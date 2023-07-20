import { style$, globalStyle$ } from '@vanilla-extract/css';
import { vars } from './vars';

globalStyle$('body, body *', {
  all: 'unset',
  boxSizing: 'border-box',
});

const tablet= 'screen and (min-width: 768px)';
const desktop = 'screen and (min-width: 1024px)';

export const App = () => (
  <div
    className={style$({
      background: vars.color['gray-900'],
      height: '100vh',
      width: '100vw',
      display: 'flex',
      placeItems: 'center',
      padding: vars.space['6x'],
    })}
  >
    <div className={style$({
      background: vars.color['gray-800'],
      borderRadius: vars.borderRadius['4x'],
      padding: vars.space['7x'],
      '@media': {
        [desktop]: {
          borderRadius: vars.borderRadius['5x'],
          padding: vars.space['8x'],
        }
      }

    })}>
      <div
        className={style$({
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: vars.space['5x'],
          '@media': {
            [desktop]: {
              gap: vars.space['6x'],
            }
          }
        })}
      >
        <h1
          className={style$({
            fontFamily: 'body',
            textAlign: 'center',
            fontSize: vars.fontSize['4x'],
            lineHeight: vars.lineHeight['4x'],
            '@media': {
              [desktop]: {
                fontSize: vars.fontSize['5x'],
                lineHeight: vars.lineHeight['5x'],              
              }
            }
          })}
        >
          <span role="img" aria-label="Waving hand">
            👋
          </span>
          <span role="img" aria-label="vanilla-extract logo">
            🧁
          </span>
          <span role="img" aria-label="Sprinkles logo">
            🍨
          </span>
        </h1>
        <h2
          className={style$({
            fontFamily: 'body',
            color: vars.color['green-500'],
            textAlign: 'center',
            fontSize: vars.fontSize['2x'],
            lineHeight: vars.lineHeight['2x'],
            '@media': {
              [tablet]: {
                fontSize: vars.fontSize['3x'],
                lineHeight: vars.lineHeight['3x'],              
              },
              [desktop]: {
                fontSize: vars.fontSize['4x'],
                lineHeight: vars.lineHeight['4x'],              
              }
            }
          })}
        >
          Hello from vanilla-extract and Sprinkles
        </h2>
      </div>
    </div>
  </div>
);
