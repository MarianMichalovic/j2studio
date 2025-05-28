"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export function useInView(thresholdOrRef?: number | React.RefObject<HTMLDivElement>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const internalRef = useRef<HTMLDivElement>(null)

  // Handle both usage patterns: useInView(ref) and useInView(threshold)
  let ref: React.RefObject<HTMLDivElement>
  let actualThreshold: number

  if (typeof thresholdOrRef === "object" && thresholdOrRef !== null) {
    // Called as useInView(ref)
    ref = thresholdOrRef
    actualThreshold = threshold
  } else {
    // Called as useInView() or useInView(threshold)
    ref = internalRef
    actualThreshold = typeof thresholdOrRef === "number" ? thresholdOrRef : threshold
  }

  // Ensure threshold is a valid number
  if (typeof actualThreshold !== "number" || !isFinite(actualThreshold)) {
    actualThreshold = 0.1
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: actualThreshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [actualThreshold])

  // Return based on usage pattern
  if (typeof thresholdOrRef === "object" && thresholdOrRef !== null) {
    return isInView
  } else {
    return [ref, isInView] as const
  }
}
