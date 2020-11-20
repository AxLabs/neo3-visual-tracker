import AutoCompleteData from "../autoCompleteData";
import RecentTransaction from "../recentTransaction";

type InvokeFileViewState = {
  view: "invokeFile";
  panelTitle: string;
  autoCompleteData: AutoCompleteData;
  collapseTransactions: boolean;
  comments: string[];
  fileContents: {
    contract?: string;
    operation?: string;
    args?: (string | number)[];
  }[];
  errorText: string;
  fileContentsJson: string;
  recentTransactions: RecentTransaction[];
  selectedTransactionId: string | null;
};

export default InvokeFileViewState;
