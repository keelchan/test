import { 
    createWorkflow, 
    WorkflowResponse,
  } from "@medusajs/framework/workflows-sdk"
  import { emitEventStep } from '@medusajs/medusa/core-flows';
  
  const emitOrderPlacedEvent = createWorkflow(
    'emit-order-placed-event',
    function (input: { id: string }) {
      emitEventStep({
        eventName: 'order.placed',
        data: {
          id: input.id,
        },
      });
  
      return new WorkflowResponse({ id: input.id });
    },
  );
  
  export default emitOrderPlacedEvent;
