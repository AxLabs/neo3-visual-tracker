import AutoCompleteData from "../autoCompleteData";
import RecentTransaction from "../recentTransaction";

type InvokeFileViewState = {
  view: "invokeFile";
  panelTitle: string;
  fileContents: {
    contract?: string;
    operation?: string;
    args?: (string | number)[];
  }[];
  fileContentsJson: string;
  autoCompleteData: AutoCompleteData;
  errorText: string;
  recentTransactions: RecentTransaction[];
  collapseTransactions: boolean;
  selectedTransactionId: string | null;
};

export default InvokeFileViewState;
