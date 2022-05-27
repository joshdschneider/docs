import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  FileUpload,
  Icon,
  Radio,
  Select,
  Switch,
  Tooltip,
} from '@joshdschneider/formation';
import { useState } from 'react';

type HomeProps = {
  toggleTheme: () => void;
};

function Home({ toggleTheme }: HomeProps) {
  return (
    <>
      <Hero />
      <ThemeToggle toggleTheme={toggleTheme} />
      <Demo />
      <Features />
      <Footer />
    </>
  );
}

function Hero() {
  let navigate = useNavigate();

  return (
    <div className='hero'>
      <div className='gradient-wrapper'>
        <div className='gradient-a' />
        <div className='gradient-b' />
        <div className='gradient-c' />
      </div>
      <h1>Ship faster with Formation</h1>
      <p>20+ customizable components for your front-end app. Free and open-source.</p>
      <div className='hero--buttons'>
        <Button intent='primary' leftIcon={<Icon icon='style' />} onClick={() => navigate('/docs')}>
          Read the docs
        </Button>
        <a
          href={'https://github.com/joshdschneider/formation'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          <span>View on Github →</span>
        </a>
      </div>
    </div>
  );
}

function ThemeToggle({ toggleTheme }: HomeProps) {
  const [checked, setChecked] = useState<boolean>(() => {
    let ls = localStorage.getItem('formation_theme');
    if (!!ls && ls === 'dark') return true;
    return false;
  });

  function handleChange() {
    setChecked(!checked);
    toggleTheme();
  }

  function toggleLight() {
    if (checked) {
      setChecked(false);
      toggleTheme();
    }
  }

  function toggleDark() {
    if (!checked) {
      setChecked(true);
      toggleTheme();
    }
  }

  return (
    <div className='theme-toggle'>
      <button onClick={() => toggleLight()}>
        <Icon icon='style' />
      </button>
      <Switch checked={checked} onChange={handleChange} className='demo--switch' />
      <button onClick={() => toggleDark()}>
        <Icon icon='style' />
      </button>
    </div>
  );
}

function Demo() {
  const [radio, setRadio] = useState<string>('TypeScript');
  const [value, setValue] = useState<string>('red');
  const [on, setOn] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean>(true);
  const [files, setFiles] = useState<FileList | null>(null);
  const navigate = useNavigate();

  const exampleOptionsGroup = [
    { label: 'React', value: 'React' },
    { label: 'Next', value: 'Next' },
    { label: 'Gatsby', value: 'Gatsby' },
    { label: 'Vite', value: 'Vite' },
    { label: 'Remix', value: 'Remix' },
  ];

  return (
    <div className='demo--container'>
      <div className='demo'>
        <div className='demo--col'>
          <div className='demo--row'>
            <div className='demo--element demo--radio-group'>
              <div className='demo--radio'>
                <Radio
                  label='HTML'
                  value='HTML'
                  name='choices'
                  onChange={() => setRadio('HTML')}
                  checked={radio === 'HTML' ? true : false}
                />
              </div>
              <div className='demo--radio'>
                <Radio
                  label='CSS'
                  value='CSS'
                  name='choices'
                  onChange={() => setRadio('CSS')}
                  checked={radio === 'CSS' ? true : false}
                />
              </div>
              <div className='demo--radio'>
                <Radio
                  label='JavaScript'
                  value='JavaScript'
                  name='choices'
                  onChange={() => setRadio('JavaScript')}
                  checked={radio === 'JavaScript' ? true : false}
                />
              </div>
              <div className='demo--radio'>
                <Radio
                  label='TypeScript'
                  value='TypeScript'
                  name='choices'
                  onChange={() => setRadio('TypeScript')}
                  checked={radio === 'TypeScript' ? true : false}
                />
              </div>
            </div>
            <div className='demo--element demo--popover'>
              <div className='popover popover--fake' data-popper-placement='bottom' data-show=''>
                <div id='popover-children' data-show=''>
                  <div className='popover--content'>
                    <p>Are you sure you want to delete user?</p>
                    <Button
                      intent='danger'
                      style={{ marginBottom: '5px' }}
                      onClick={() => navigate('/docs/popover')}
                    >
                      Delete
                    </Button>
                  </div>
                  <div id='arrow' data-popper-arrow='true'></div>
                </div>
              </div>
              <Button id='foo' onClick={() => navigate('/docs/popover')}>
                Delete user
              </Button>
            </div>
          </div>
          <div className='demo--row'>
            <Tooltip
              selector='#bar'
              content={<span>{`Not immediately obvious`}</span>}
              placement={'bottom'}
            />
            <div className='demo--element'>
              <p style={{ fontWeight: '500' }}>
                {`Use a tooltip for `}
                <span id='bar' style={{ borderBottom: '1px dashed', cursor: 'help' }}>
                  subtle
                </span>
                {' explanations and tips.'}
              </p>
            </div>
          </div>
          <div className='demo--row'>
            <div className='demo--element'>
              <Button
                intent='success'
                leftIcon={<Icon icon='style' />}
                onClick={() => navigate('/docs/button')}
              >
                Complete
              </Button>
            </div>
            <div className='demo--element demo--select'>
              <Select
                intent={'default'}
                value={value}
                options={exampleOptionsGroup}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='demo--col'>
          <div className='demo--row'>
            <div className='demo--element'>
              <FileUpload
                value={files ?? undefined}
                multiple={true}
                onChage={(e) => setFiles(e.target.files)}
                width={'225px'}
              />
            </div>
            <div className='demo--element'>
              <Switch label='Power' checked={on} onChange={(e) => setOn(e.target.checked)} />
            </div>
          </div>
          <div className='demo--row'>
            <div className='demo--element'>
              <Checkbox
                label='Subscribe'
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            </div>
            <div className='demo--element'>
              <ButtonGroup>
                <Button intent='primary'>Bold</Button>
                <Button intent='primary'>
                  <i>Italic</i>
                </Button>
                <Button intent='primary'>
                  <span style={{ textDecoration: 'underline' }}>Underline</span>
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className='demo--row'>
            <Card className='demo--card' interactive>
              <h3>Design</h3>
              <p>Styles come and go. Good design is a language, not a style.</p>
              <Button intent='warning' onClick={() => navigate('/docs')}>
                Explore
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <>
      <div className='features--container'>
        <div className='features'>
          <div className='feature'>
            <h5>Free & open-source</h5>
            <p>
              All code is under MIT license, so you can use Formation in your projects for free
              forever.
            </p>
          </div>
          <div className='feature'>
            <h5>Type safe</h5>
            <p>Formation is written in TypeScript for maximum safety and developer productivity.</p>
          </div>
          <div className='feature'>
            <h5>Accessibility focused</h5>
            <p>
              WCAG 2.0 standards are the foundation for our color palette, navigation, and overall
              design.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <div className='footer--container'>
      <div className='footer'>
        <p>© 2022 Formation</p>
        <p>
          Made with ♥ by&nbsp;
          <a href='http://twitter.com/joshdschneider' target='_blank' rel='noreferrer'>
            Josh
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
