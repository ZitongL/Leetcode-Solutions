class Solution {
    public boolean uniqueOccurrences(int[] arr) {
       
        var hmap = new HashMap<Integer,Integer>();
        for(int i:arr){
            hmap.put(i,hmap.getOrDefault(i,0)+1);
        }
        var arrli=new ArrayList<Integer>(hmap.keySet());
          var set=new HashSet<Integer>();
        
        for(Integer i: arrli)
            set.add(hmap.get(i));
        
        
        
        
        
        return set.size()==arrli.size() ? true : false;
        
    }
}
