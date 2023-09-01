const nftAbi = [
  'constructor(string _name, string _symbol, string _initBaseURI, string _baseExtension, bool[] _settings, uint256 _dropStart, uint256 _reserve, tuple(address royaltyRecipient, uint16 royaltyPercentageBps, uint256 maxSupply, uint256 pricePerMint) _data)',
  'error ERC721AddressZeroIsNotaValidOwner()',
  'error ERC721ApprovalToCurrentOwner()',
  'error ERC721ApproveCallerIsNotOwnerNorApprovedForAll()',
  'error ERC721ApproveToCaller()',
  'error ERC721InvalidTokenId()',
  'error ERC721MintToTheZeroAddress()',
  'error ERC721NotApprovedOrOwner()',
  'error ERC721TokenAlreadyMinted()',
  'error ERC721TransferFromIncorrectOwner()',
  'error ERC721TransferToNonReceiverImplementer()',
  'error ERC721TransferToTheZeroAddress()',
  'error RMRKChildAlreadyExists()',
  'error RMRKChildIndexOutOfRange()',
  'error RMRKIdZeroForbidden()',
  'error RMRKIsNotContract()',
  'error RMRKMaxPendingChildrenReached()',
  'error RMRKMaxRecursiveBurnsReached(address childContract, uint256 childId)',
  'error RMRKMintOverMax()',
  'error RMRKMintToNonRMRKNestableImplementer()',
  'error RMRKMintZero()',
  'error RMRKNestableTooDeep()',
  'error RMRKNestableTransferToDescendant()',
  'error RMRKNestableTransferToNonRMRKNestableImplementer()',
  'error RMRKNestableTransferToSelf()',
  'error RMRKNewContributorIsZeroAddress()',
  'error RMRKNewOwnerIsZeroAddress()',
  'error RMRKNotApprovedOrDirectOwner()',
  'error RMRKNotOwner()',
  'error RMRKPendingChildIndexOutOfRange()',
  'error RMRKRoyaltiesTooHigh()',
  'error RMRKUnexpectedChildId()',
  'error RMRKUnexpectedNumberOfChildren()',
  'error RMRKWrongValueSent()',
  'event AllChildrenRejected(uint256 indexed tokenId)',
  'event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)',
  'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
  'event ChildAccepted(uint256 indexed tokenId, uint256 childIndex, address indexed childAddress, uint256 indexed childId)',
  'event ChildProposed(uint256 indexed tokenId, uint256 childIndex, address indexed childAddress, uint256 indexed childId)',
  'event ChildTransferred(uint256 indexed tokenId, uint256 childIndex, address indexed childAddress, uint256 indexed childId, bool fromPending, bool toZero)',
  'event ContributorUpdate(address indexed contributor, bool isContributor)',
  'event NestTransfer(address indexed from, address indexed to, uint256 fromTokenId, uint256 toTokenId, uint256 indexed tokenId)',
  'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
  'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
  'function RMRK_INTERFACE() view returns (bytes4)',
  'function VERSION() view returns (string)',
  'function acceptChild(uint256 parentId, uint256 childIndex, address childAddress, uint256 childId)',
  'function addChild(uint256 parentId, uint256 childId, bytes data)',
  'function allTokens() view returns (uint256[])',
  'function approve(address to, uint256 tokenId)',
  'function balanceOf(address owner) view returns (uint256)',
  'function baseExtension() view returns (string)',
  'function burn(uint256 tokenId)',
  'function burn(uint256 tokenId, uint256 maxChildrenBurns) returns (uint256)',
  'function childOf(uint256 parentId, uint256 index) view returns (tuple(uint256 tokenId, address contractAddress))',
  'function childrenOf(uint256 parentId) view returns (tuple(uint256 tokenId, address contractAddress)[])',
  'function collectionMetadata() view returns (string)',
  'function directOwnerOf(uint256 tokenId) view returns (address, uint256, bool)',
  'function dropStart() view returns (uint256)',
  'function getApproved(uint256 tokenId) view returns (address)',
  'function getRoyaltyPercentage() view returns (uint256)',
  'function getRoyaltyRecipient() view returns (address)',
  'function isApprovedForAll(address owner, address operator) view returns (bool)',
  'function isContributor(address contributor) view returns (bool)',
  'function isDrop() view returns (bool)',
  'function isRevokable() view returns (bool)',
  'function isSoulbound() view returns (bool)',
  'function lastId() view returns (uint256)',
  'function manageContributor(address contributor, bool grantRole)',
  'function maxSupply() view returns (uint256)',
  'function mint(address to, uint256 numToMint) payable returns (uint256)',
  'function name() view returns (string)',
  'function nestMint(address to, uint256 numToMint, uint256 destinationId) payable returns (uint256)',
  'function nestTransferFrom(address from, address to, uint256 tokenId, uint256 destinationId, bytes data)',
  'function owner() view returns (address)',
  'function ownerMint(address _receiver, uint16 _numToMint)',
  'function ownerNestMint(address _receiver, uint16 _numToMint, uint256 destinationId)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function pendingChildOf(uint256 parentId, uint256 index) view returns (tuple(uint256 tokenId, address contractAddress))',
  'function pendingChildrenOf(uint256 parentId) view returns (tuple(uint256 tokenId, address contractAddress)[])',
  'function pricePerMint() view returns (uint256)',
  'function rejectAllChildren(uint256 tokenId, uint256 maxRejections)',
  'function renounceOwnership()',
  'function reserve() view returns (uint256)',
  'function royaltyInfo(uint256 tokenId, uint256 salePrice) view returns (address receiver, uint256 royaltyAmount)',
  'function safeTransferFrom(address from, address to, uint256 tokenId)',
  'function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)',
  'function setApprovalForAll(address operator, bool approved)',
  'function setBaseExtension(string _newBaseExtension)',
  'function setBaseURI(string _newBaseURI)',
  'function setDropStart(uint256 _dropStart)',
  'function supportsInterface(bytes4 interfaceId) view returns (bool)',
  'function symbol() view returns (string)',
  'function tokenByIndex(uint256 index) view returns (uint256)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
  'function tokenURI(uint256 tokenId) view returns (string)',
  'function totalAssets() view returns (uint256)',
  'function totalSupply() view returns (uint256)',
  'function transferChild(uint256 tokenId, address to, uint256 destinationId, uint256 childIndex, address childAddress, uint256 childId, bool isPending, bytes data)',
  'function transferFrom(address from, address to, uint256 tokenId)',
  'function transferOwnership(address newOwner)',
  'function updateRoyaltyRecipient(address newRoyaltyRecipient)',
  'function walletOfOwner(address _owner) view returns (uint256[])',
  'function withdrawRaised(address to, uint256 amount)',
]
export default nftAbi
