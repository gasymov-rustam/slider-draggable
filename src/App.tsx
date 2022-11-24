import ReactSlider from 'react-slider';

const State = (props: { state: any; propss: any }) => {
  const { state, propss } = props;
  console.log(state, propss);
  return <div {...propss}>{state.valueNow}</div>;
};

export const App = () => {
  return (
    <div className='App'>
      {/* <ReactSlider
        className='horizontal-slider'
        thumbClassName='example-thumb-custom'
        trackClassName='example-track'
        renderThumb={(propss, state) => <State propss={propss} state={state} />}
      /> */}

      <ReactSlider
        className='horizontal-slider'
        thumbClassName='example-thumb'
        trackClassName='example-track'
        defaultValue={[0, 100]}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
        onChange={(value, index) => console.log(1111, value, index)}
      />
      <ReactSlider
        className='horizontal-slider'
        thumbClassName='example-thumb'
        trackClassName='example-track'
        defaultValue={[0, 50, 100]}
        ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling={false}
        minDistance={10}
        step={5}
        onChange={(value, index) => console.log(1111, value, index)}
        snapDragDisabled
      />
      <ReactSlider
        className='vertical-slider1'
        thumbClassName='example-thumb1'
        trackClassName='example-track'
        marks={[10, 20, 40, 50, 70, 90]}
        markClassName='example-track-custom2'
        defaultValue={[0, 30, 70, 85, 100]}
        orientation='vertical'
        ariaLabel={['Leftmost thumb', 'Rightmost thumb']}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        step={5}
        pearling
        minDistance={10}
      />
      <ReactSlider
        className='vertical-slider'
        thumbClassName='example-thumb'
        trackClassName='example-track'
        defaultValue={[0, 50, 100]}
        ariaLabel={['Lowest thumb', 'Middle thumb', 'Top thumb']}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        orientation='vertical'
        invert
        pearling
        minDistance={10}
      />
      <ReactSlider
        className='horizontal-slider'
        marks={[5, 10, 35, 40, 95]}
        markClassName='example-mark'
        // min={0}
        // max={5}
        thumbClassName='example-thumb'
        trackClassName='example-track'
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <ReactSlider
        className='horizontal-slider'
        thumbClassName='example-thumb'
        trackClassName='example-track'
        marks={[10, 20, 40, 50, 70, 90]}
        markClassName='example-track-custom'
        defaultValue={[0, 30, 70, 85, 100]}
        ariaLabel={['Leftmost thumb', 'Rightmost thumb']}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
      />
    </div>
  );
};
