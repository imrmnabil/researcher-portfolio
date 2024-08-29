import { useRef, useEffect, useState } from 'react';

function calcHeightWithMergin(elementRef:any) {
    if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(elementRef.current);
    
        const heightWithoutMargin = rect.height;
        const marginTop = parseFloat(computedStyle.marginTop);
        const marginBottom = parseFloat(computedStyle.marginBottom);
    
        return heightWithoutMargin + marginTop + marginBottom;
      }
      return 0;
}

export default calcHeightWithMergin
