import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { menus, sections } from './constants';
import Page from './components/Page';

function App() {
  const [visibleSection, setVisibleSection] = useState(menus[0]);
  const refs = useRef([]);

  const options = {
    threshold: 0.5,
  };

  const refCallback = useCallback((sectionRef) => {
    refs.current.push(sectionRef);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.getAttribute('id'));
        }
      });
    }, options);

    refs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            {menus.map((menu, index) => (
              <li
                key={index}
                className={visibleSection === menu ? 'active' : ''}
              >
                <a href={`#${menu}`}>{menu}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div>
          {sections.map((section, index) => (
            <Page {...{ section, refCallback }} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
