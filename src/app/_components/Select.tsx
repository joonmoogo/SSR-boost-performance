import React, { useCallback, useEffect, useRef, useState } from "react";
import './select.css'

type Options = Array<{ value: string; label: string }>;

type SelectProps = {
  value?: string | null;
  options: Options | (() => Promise<Options>);
  placeholder?: string | null;
  /* a prop is added */
  onChange?: (value: string) => void;
};

function Select(props: SelectProps) {

  const placeholderRef = useRef<HTMLDivElement>(null);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const optionListRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  const [optionData, setOptionData] = useState<Options | null>(typeof (props.options) === 'object' ? props.options : null)
  const [filteredData, setFilteredData] = useState<Options | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>('');
  const [selectedData, setSelectedData] = useState<string>('');
  let [optionCounter, setOptionCouter] = useState<number>(-1);

  useEffect(() => {
    const scroll = () => {
      const container = containerRef.current;
      const optionList = optionListRef.current;
      if (optionList && container) {
        const optionListStyle = window.getComputedStyle(optionList);
        const optionListHeight = optionListStyle.getPropertyValue('height');
        const parsedHeight = parseInt(optionListHeight);
        const { height, top } = container.getBoundingClientRect();
        const innerHeight = window.innerHeight;
        if (top + height + parsedHeight > innerHeight) {
          optionList.style.transform = `translateY(-${height + parsedHeight}px)`;
        } else {
          optionList.style.transform = 'translateY(0)';
        }
      }
    }
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, [isOpen]);

  useEffect(() => {
    const initializeData = async () => {
      if (typeof (props.options) === 'function') {
        const data = await props.options();
        setOptionData(data);
        setFilteredData(data);
      }
    }
    initializeData();
  }, [])

  useEffect(()=>{
    if(props.onChange){
      props.onChange(selectedData)
    }
  },[selectedData])

  useEffect(() => {
    const optionList = optionListRef.current;
    if (optionList) {
      const child = optionList.childNodes[optionCounter] as HTMLDivElement
      if (child) {
        child.scrollIntoView({ behavior: 'smooth' })
        child.classList.add('active');
      }
    }

    return () => {
      if (optionList) {
        const child = optionList.childNodes[optionCounter] as HTMLDivElement
        if (child) {
          child.classList.remove('active')
        }
      }

    }
  }, [optionCounter])

  const onKeyDown = (e: any) => {
    onFocus();
    if (e.code === 'ArrowDown') {
      if (optionCounter + 1 == filteredData?.length) {
        setOptionCouter(0);
      }
      else {
        setOptionCouter(optionCounter => optionCounter + 1)
      }
    }
    else if (e.code === 'ArrowUp') {
      if (optionCounter - 1 == -1 || optionCounter === -1) {
        if (filteredData) {
          setOptionCouter(filteredData?.length - 1);
        }
      }
      else {
        setOptionCouter(optionCounter => optionCounter - 1);
      }
    }
    else if (e.code === 'Enter') {
      const optionList = optionListRef.current
      if (optionList) {
        const child = optionList.childNodes[optionCounter] as HTMLDivElement
        if (child.textContent) {
          setCurrentValue(child.textContent)
          setSelectedData(child.textContent)
          setIsOpen(false)
        }
      }
    }

    else if (e.code === 'Escape') {
      onBlur();
    }
  }

  useEffect(() => {
    setOptionCouter(-1)
  }, [filteredData])

  const onFocus = useCallback(() => {
    const placeholder = placeholderRef.current
    const selectWrapper = selectWrapperRef.current;
    if (placeholder && selectWrapper) {
      placeholder.classList.add("active")
      selectWrapper.classList.add("active")
      setIsOpen(true);
    }
  }, [])

  const onBlur = () => {
    const placeholder = placeholderRef.current
    const input = inputRef.current
    const selectWrapper = selectWrapperRef.current
    if (placeholder && input && selectWrapper && selectedData === '') {
      placeholder.classList.remove("active")
      selectWrapper.classList.remove("active")
      setCurrentValue('');
      setIsOpen(false)
    }
    else if (placeholder && input && selectWrapper && selectedData !== '') {
      setIsOpen(false);
    }
  }

  const inputChangeHandler = (e: any) => {
    setCurrentValue(e.target.value);
  }

  useEffect(() => {
    if (optionData) {
      const filtered = optionData.filter((el) =>
        el.label.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [currentValue])

  const displayButtonHandler = () => {
    const input = inputRef.current
    if (isOpen === false) {
      onFocus();
    }
    else if (isOpen === true && input && input.value === '') {
      onBlur();
    }
  }

  const deleteButtonHandler = () => {
    setCurrentValue('');
    setSelectedData('');
  }

  return (
    <React.Fragment>
      <div className="container" ref={containerRef}>
        <div className="select-wrapper" role="select-wrapper" ref={selectWrapperRef}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        >
          <input id="input" ref={inputRef} onChange={inputChangeHandler} value={currentValue}></input>
          <div className="placeholder" ref={placeholderRef}>{props.placeholder && props.placeholder}</div>
          {currentValue ? <div className="delete-button" role="delete-button" onClick={deleteButtonHandler}>x</div> : null}
          <div className="display-button" role="display-button" onClick={displayButtonHandler}>{isOpen ? <div>⋎</div> : <div>⋏</div>}</div>
        </div>
        <div className="option-list" ref={optionListRef} role="option-list">
          {
            isOpen ?
              filteredData && filteredData.map((e: any, index: number) => {
                return (<div key={e.value} className="option" onMouseDown={() => {
                  setSelectedData(e.label);
                  setCurrentValue(e.label)
                  setOptionCouter(index);
                }}>{e.label}</div>)
              }
              ) : null
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export { Select };
