// Το snippet του Chakra συνθέτει trigger και περιεχόμενο tooltip. Δεν χρησιμοποιείται ακόμη στις σελίδες.
// Το alias ChakraTooltip ξεχωρίζει το εισαγόμενο API από το δικό μου component Tooltip.
import { Tooltip as ChakraTooltip, Portal } from "@chakra-ui/react"
import * as React from "react"

// Η interface επεκτείνει τα props του Chakra με επιλογές του wrapper. Το ? δηλώνει προαιρετικό πεδίο.
// Το ReactNode επιτρέπει ως content κείμενο ή άλλο περιεχόμενο που μπορεί να αποδώσει το React.
export interface TooltipProps extends ChakraTooltip.RootProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement | null>
  content: React.ReactNode
  contentProps?: ChakraTooltip.ContentProps
  disabled?: boolean
}

// Το forwardRef μεταφέρει το ref στο στοιχείο του tooltip που εμφανίζεται, όχι στο trigger.
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    // Ξεχωρίζω τα props του wrapper και συγκεντρώνω τα υπόλοιπα στο rest για το Root.
    // Το portalled = true ισχύει όταν δεν δοθεί τιμή ή δοθεί undefined.
    const {
      showArrow,
      children,
      disabled,
      portalled = true,
      content,
      contentProps,
      portalRef,
      ...rest
    } = props

    // Αν το tooltip είναι ανενεργό, επιστρέφω μόνο τα αρχικά children χωρίς το περίβλημά του.
    if (disabled) return children

    return (
      <ChakraTooltip.Root {...rest}>
        {/* Το asChild χρησιμοποιεί το ίδιο το child ως trigger, χωρίς επιπλέον στοιχείο γύρω του. */}
        <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
        {/* Το portalled επιλέγει αν θα χρησιμοποιηθεί portal και το portalRef μπορεί να ορίσει τον προορισμό του. */}
        <Portal disabled={!portalled} container={portalRef}>
          <ChakraTooltip.Positioner>
            {/* Ο Positioner χειρίζεται τη θέση. Στο Content προωθώ ref και contentProps. */}
            <ChakraTooltip.Content ref={ref} {...contentProps}>
              {/* Το βέλος εμφανίζεται μόνο όταν το showArrow είναι αληθές. Το content αποδίδεται από κάτω. */}
              {showArrow && (
                <ChakraTooltip.Arrow>
                  <ChakraTooltip.ArrowTip />
                </ChakraTooltip.Arrow>
              )}
              {content}
            </ChakraTooltip.Content>
          </ChakraTooltip.Positioner>
        </Portal>
      </ChakraTooltip.Root>
    )
  },
)
