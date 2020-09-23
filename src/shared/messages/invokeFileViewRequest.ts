type InvokeFileViewRequest = {
  dismissError?: boolean;
  initiateConnection?: boolean;
  disconnect?: boolean;
  update?: {
    i: number;
    contract?: string;
    operation?: string;
    args?: (string | number)[];
  };
  run?: boolean;
};

export default InvokeFileViewRequest;
